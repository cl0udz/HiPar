"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.trim");

require("core-js/modules/es.string.link");

require("core-js/modules/web.dom-collections.for-each");

/* eslint-disable prefer-arrow-callback, no-var, no-tabs */

/* globals showNotification, numeral, feather */
$(document).ready(function () {
  if ($(window).width() < 768) {
    $('.menu-side').on('click', function (e) {
      e.preventDefault();
      $('.menu-side li:not(".active")').slideToggle();
    });
    $('.menu-side li:not(".active")').hide();
    $('.menu-side>.active').html('<i class="feather" data-feather="menu"></i>');
    $('.menu-side>.active').addClass('menu-side-mobile'); // hide menu if there are no items in it

    if ($('#navbar ul li').length === 0) {
      $('#navbar').hide();
    }

    $('#offcanvasClose').hide();
  }

  $('#userSetupForm').validator().on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
      e.preventDefault();
      $.ajax({
        method: 'POST',
        url: '/admin/setup_action',
        data: {
          usersName: $('#usersName').val(),
          userEmail: $('#userEmail').val(),
          userPassword: $('#userPassword').val()
        }
      }).done(function (msg) {
        showNotification(msg.message, 'success', false, '/admin/login');
      }).fail(function (msg) {
        showNotification(msg.responseJSON.message, 'danger');
      });
    }
  });
  $(document).on('click', '.menu-btn', function (e) {
    e.preventDefault();
    $('body').addClass('pushy-open-right');
  }); // add the table class to all tables

  $('table').each(function () {
    $(this).addClass('table table-hover');
  });

  if ($('#productTags').length) {
    $('#productTags').tokenfield();
  }

  $(document).on('click', '.dashboard_list', function (e) {
    window.document.location = $(this).attr('href');
  }).hover(function () {
    $(this).toggleClass('hover');
  });
  $(document).on('click', '.btn-qty-minus', function (e) {
    e.preventDefault();
    var qtyElement = $(e.target).parent().parent().find('.cart-product-quantity');
    $(qtyElement).val(parseInt(qtyElement.val()) - 1);
    cartUpdate(qtyElement);
  });
  $(document).on('click', '.btn-qty-add', function (e) {
    e.preventDefault();
    var qtyElement = $(e.target).parent().parent().find('.cart-product-quantity');
    $(qtyElement).val(parseInt(qtyElement.val()) + 1);
    cartUpdate(qtyElement);
  });
  $(document).on('click', '.btn-delete-from-cart', function (e) {
    deleteFromCart($(e.target));
  });

  if ($('#pager').length) {
    var pageNum = $('#pageNum').val();
    var pageLen = $('#productsPerPage').val();
    var productCount = $('#totalProductCount').val();
    var paginateUrl = $('#paginateUrl').val();
    var searchTerm = $('#searchTerm').val();

    if (searchTerm !== '') {
      searchTerm = searchTerm + '/';
    }

    var pagerHref = '/' + paginateUrl + '/' + searchTerm + '{{number}}';
    var totalProducts = Math.ceil(productCount / pageLen);

    if (parseInt(productCount) > parseInt(pageLen)) {
      $('#pager').bootpag({
        total: totalProducts,
        page: pageNum,
        maxVisible: 5,
        href: pagerHref,
        wrapClass: 'pagination',
        prevClass: 'page-item previous',
        nextClass: 'page-item next',
        activeClass: 'page-item active'
      }); // Fix for Bootstrap 4

      $('#pager a').each(function () {
        $(this).addClass('page-link');
      });
    }
  }

  $('#customerLogout').on('click', function (e) {
    $.ajax({
      method: 'POST',
      url: '/customer/logout',
      data: {}
    }).done(function (msg) {
      location.reload();
    });
  });
  $('#customerForgotten').validator().on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
      e.preventDefault();
      $.ajax({
        method: 'POST',
        url: '/customer/forgotten_action',
        data: {
          email: $('#email').val()
        }
      }).done(function (msg) {
        showNotification(msg.message, 'success');
      }).fail(function (msg) {
        if (msg.message) {
          showNotification(msg.responseJSON.message, 'danger');
          return;
        }

        showNotification(msg.responseText, 'danger');
      });
    }
  });
  $(document).on('click', '#createAccountCheckbox', function (e) {
    $('#newCustomerPassword').prop('required', $('#createAccountCheckbox').prop('checked'));
  });
  $('#checkoutInformation').validator().on('click', function (e) {
    e.preventDefault();

    if ($('#shipping-form').validator('validate').has('.has-error').length === 0) {
      // Change route if customer to be saved for later
      var route = '/customer/save';

      if ($('#createAccountCheckbox').prop('checked')) {
        route = '/customer/create';
      }

      $.ajax({
        method: 'POST',
        url: route,
        data: {
          email: $('#shipEmail').val(),
          firstName: $('#shipFirstname').val(),
          lastName: $('#shipLastname').val(),
          address1: $('#shipAddr1').val(),
          address2: $('#shipAddr2').val(),
          country: $('#shipCountry').val(),
          state: $('#shipState').val(),
          postcode: $('#shipPostcode').val(),
          phone: $('#shipPhoneNumber').val(),
          password: $('#newCustomerPassword').val(),
          orderComment: $('#orderComment').val()
        }
      }).done(function () {
        window.location = '/checkout/shipping';
      }).fail(function (msg) {
        showNotification(msg.responseJSON.message, 'danger');
      });
    }
  });
  $('#addDiscountCode').on('click', function (e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/checkout/adddiscountcode',
      data: {
        discountCode: $('#discountCode').val()
      }
    }).done(function (msg) {
      showNotification(msg.message, 'success', true);
    }).fail(function (msg) {
      showNotification(msg.responseJSON.message, 'danger');
    });
  });
  $('#removeDiscountCode').on('click', function (e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/checkout/removediscountcode',
      data: {}
    }).done(function (msg) {
      showNotification(msg.message, 'success', true);
    }).fail(function (msg) {
      showNotification(msg.responseJSON.message, 'danger');
    });
  });
  $('#loginForm').on('click', function (e) {
    if (!e.isDefaultPrevented()) {
      e.preventDefault();
      $.ajax({
        method: 'POST',
        url: '/admin/login_action',
        data: {
          email: $('#email').val(),
          password: $('#password').val()
        }
      }).done(function (msg) {
        window.location = '/admin';
      }).fail(function (msg) {
        showNotification(msg.responseJSON.message, 'danger');
      });
    }

    e.preventDefault();
  }); // call update settings API

  $('#customerLogin').on('click', function (e) {
    if (!e.isDefaultPrevented()) {
      e.preventDefault();
      $.ajax({
        method: 'POST',
        url: '/customer/login_action',
        data: {
          loginEmail: $('#customerLoginEmail').val(),
          loginPassword: $('#customerLoginPassword').val()
        }
      }).done(function (msg) {
        var customer = msg.customer; // Fill in customer form

        $('#shipEmail').val(customer.email);
        $('#shipFirstname').val(customer.firstName);
        $('#shipLastname').val(customer.lastName);
        $('#shipAddr1').val(customer.address1);
        $('#shipAddr2').val(customer.address2);
        $('#shipCountry').val(customer.country);
        $('#shipState').val(customer.state);
        $('#shipPostcode').val(customer.postcode);
        $('#shipPhoneNumber').val(customer.phone);
        location.reload();
      }).fail(function (msg) {
        showNotification(msg.responseJSON.message, 'danger');
      });
    }

    e.preventDefault();
  });
  $(document).on('click', '.image-next', function (e) {
    var thumbnails = $('.thumbnail-image');
    var index = 0;
    var matchedIndex = 0; // get the current src image and go to the next one

    $('.thumbnail-image').each(function () {
      if ($('#product-title-image').attr('src') === $(this).attr('src')) {
        if (index + 1 === thumbnails.length || index + 1 < 0) {
          matchedIndex = 0;
        } else {
          matchedIndex = index + 1;
        }
      }

      index++;
    }); // set the image src

    $('#product-title-image').attr('src', $(thumbnails).eq(matchedIndex).attr('src'));
  });
  $(document).on('click', '.image-prev', function (e) {
    var thumbnails = $('.thumbnail-image');
    var index = 0;
    var matchedIndex = 0; // get the current src image and go to the next one

    $('.thumbnail-image').each(function () {
      if ($('#product-title-image').attr('src') === $(this).attr('src')) {
        if (index - 1 === thumbnails.length || index - 1 < 0) {
          matchedIndex = thumbnails.length - 1;
        } else {
          matchedIndex = index - 1;
        }
      }

      index++;
    }); // set the image src

    $('#product-title-image').attr('src', $(thumbnails).eq(matchedIndex).attr('src'));
  });
  $(document).on('click', '.product-add-to-cart', function (e) {
    var productOptions = getSelectedOptions();

    if (parseInt($('#product_quantity').val()) < 1) {
      $('#product_quantity').val(1);
    }

    $.ajax({
      method: 'POST',
      url: '/product/addtocart',
      data: {
        productId: $('#productId').val(),
        productQuantity: $('#product_quantity').val(),
        productOptions: JSON.stringify(productOptions),
        productComment: $('#product_comment').val()
      }
    }).done(function (msg) {
      showNotification(msg.message, 'success');
      updateCartDiv();
    }).fail(function (msg) {
      showNotification(msg.responseJSON.message, 'danger');
    });
  });
  $('#product_quantity').on('keyup', function (e) {
    checkMaxQuantity(e, $('#product_quantity'));
  });
  $('.cart-product-quantity').on('keyup', function (e) {
    checkMaxQuantity(e, $('.cart-product-quantity'));
  });
  $('.cart-product-quantity').on('focusout', function (e) {
    cartUpdate($(e.target));
  });
  $(document).on('click', '.pushy-link', function (e) {
    $('body').removeClass('pushy-open-right');
  });
  $(document).on('click', '.add-to-cart', function (e) {
    var productLink = '/product/' + $(this).attr('data-id');

    if ($(this).attr('data-link')) {
      productLink = '/product/' + $(this).attr('data-link');
    }

    if ($(this).attr('data-has-options') === 'true') {
      window.location = productLink;
    } else {
      $.ajax({
        method: 'POST',
        url: '/product/addtocart',
        data: {
          productId: $(this).attr('data-id')
        }
      }).done(function (msg) {
        showNotification(msg.message, 'success');
        updateCartDiv();
      }).fail(function (msg) {
        showNotification(msg.responseJSON.message, 'danger');
      });
    }
  }); // On empty cart click

  $(document).on('click', '#empty-cart', function (e) {
    $('#confirmModal').modal('show');
    $('#buttonConfirm').attr('data-func', 'emptyCart');
  });
  $(document).on('click', '#buttonConfirm', function (e) {
    // Get the function and run it
    var func = $(e.target).attr('data-func');
    window[func]();
    $('#confirmModal').modal('hide');
  });
  $('.qty-btn-minus').on('click', function () {
    var number = parseInt($('#product_quantity').val()) - 1;
    $('#product_quantity').val(number > 0 ? number : 1);
  });
  $('.qty-btn-plus').on('click', function () {
    $('#product_quantity').val(parseInt($('#product_quantity').val()) + 1);
  }); // product thumbnail image click

  $('.thumbnail-image').on('click', function () {
    $('#product-title-image').attr('src', $(this).attr('src'));
  }); // resets the order filter

  $(document).on('click', '#btn_search_reset', function (e) {
    window.location.replace('/');
  }); // search button click event

  $(document).on('click', '#btn_search', function (e) {
    e.preventDefault();

    if ($('#frm_search').val().trim() === '') {
      showNotification('Please enter a search value', 'danger');
    } else {
      window.location.href = '/search/' + $('#frm_search').val();
    }
  });

  if ($('#input_notify_message').val() !== '') {
    // save values from inputs
    var messageVal = $('#input_notify_message').val();
    var messageTypeVal = $('#input_notify_messageType').val(); // clear inputs

    $('#input_notify_message').val('');
    $('#input_notify_messageType').val(''); // alert

    showNotification(messageVal, messageTypeVal || 'danger', false);
  }
});

function checkMaxQuantity(e, element) {
  if ($('#maxQuantity').length) {
    if (e.keyCode === 46 || e.keyCode === 8) {
      return;
    }

    if (parseInt($(e.target).val()) > parseInt($('#maxQuantity').val())) {
      var qty = element.val();
      e.preventDefault();
      element.val(qty.slice(0, -1));
      showNotification("Exceeds maximum quantity: ".concat($('#maxQuantity').val()), 'warning', false);
    }
  }
}

function deleteFromCart(element) {
  $.ajax({
    method: 'POST',
    url: '/product/removefromcart',
    data: {
      cartId: element.attr('data-cartid')
    }
  }).done(function (msg) {
    showNotification(msg.message, 'success');
    updateCartDiv();
  }).fail(function (msg) {
    showNotification(msg.responseJSON.message, 'danger');
  });
}

function cartUpdate(element) {
  if ($(element).val() > 0) {
    if ($(element).val() !== '') {
      updateCart(element);
    }
  } else {
    $(element).val(1);
  }
}

function updateCart(element) {
  // update cart on server
  $.ajax({
    method: 'POST',
    url: '/product/updatecart',
    data: {
      cartId: element.attr('data-cartid'),
      productId: element.attr('data-id'),
      quantity: element.val()
    }
  }).done(function (msg) {
    updateCartDiv();
  }).fail(function (msg) {
    showNotification(msg.responseJSON.message, 'danger', true);
  });
}

function getSelectedOptions() {
  var options = {};
  $('.product-opt').each(function () {
    var optionValue = $(this).val().trim();
    var optionLabel = $(this).attr('data-label');
    var optionName = $(this).attr('name');
    var optionType = $(this).attr('type'); // If select option

    if (!optionType) {
      options[optionName] = {
        label: optionLabel,
        name: optionName,
        value: optionValue
      };
    } // If radio option


    if (optionType === 'radio') {
      options[optionName] = {
        label: optionLabel,
        name: optionName,
        value: $('input[name="' + optionName + '"]:checked').val()
      };
    } // If checkbox option


    if (optionType === 'checkbox') {
      options[optionName] = {
        label: optionLabel,
        name: optionName,
        value: $('input[name="' + $(this).attr('name') + '"]').is(':checked')
      };
    }
  });
  return options;
}

function updateCartDiv() {
  $.ajax({
    method: 'GET',
    url: '/checkout/cartdata'
  }).done(function (result) {
    // Update the cart div
    var cart = result.cart;
    var session = result.session;
    var productHtml = '';
    var totalAmount = numeral(session.totalCartAmount).format('0.00'); // Work out the shipping

    var shippingTotalAmt = numeral(session.totalCartShipping).format('0.00');
    var shippingTotal = "".concat(session.shippingMessage, " :<strong id=\"shipping-amount\">").concat(result.currencySymbol).concat(shippingTotalAmt, "</strong>");

    if (session.totalCartShipping === 0) {
      shippingTotal = "<span id=\"shipping-amount\">".concat(session.shippingMessage, "</span>");
    }

    var discountTotalAmt = numeral(session.totalCartDiscount).format('0.00');
    var discountTotal = '';

    if (session.totalCartDiscount > 0) {
      discountTotal = "\n                <div class=\"text-right\">\n                    Discount: <strong id=\"discount-amount\">".concat(result.currencySymbol).concat(discountTotalAmt, "</strong>\n                </div>");
    } // If the cart has contents


    if (cart) {
      $('#cart-empty').empty();
      Object.keys(cart).forEach(function (productId) {
        var item = cart[productId]; // Setup the product

        var productTotalAmount = numeral(item.totalItemPrice).format('0.00');
        var optionsHtml = '';
        var optionIndex = 1;
        Object.keys(item.options).forEach(function (key) {
          var option = item.options[key];

          if (optionIndex === Object.keys(item.options).length) {
            optionsHtml += "<strong>".concat(upperFirst(option.name), "</strong>: ").concat(option.value);
          } else {
            optionsHtml += "<strong>".concat(upperFirst(option.name), "</strong>: ").concat(option.value, " / ");
          }

          optionIndex++;
        });
        var productImage = "<img class=\"img-fluid\" src=\"/uploads/placeholder.png\" alt=\"".concat(item.title, " product image\"></img>");

        if (item.productImage) {
          productImage = "<img class=\"img-fluid\" src=\"".concat(item.productImage, "\" alt=\"").concat(item.title, " product image\"></img>");
        } // Setup the product html


        productHtml += "\n                <div class=\"d-flex flex-row bottom-pad-15\">\n                    <div class=\"p-2 cart-product\">\n                        <div class=\"row h-200\">\n                            <div class=\"col-4 col-md-3 no-pad-left\">\n                                ".concat(productImage, "\n                            </div>\n                            <div class=\"col-8 col-md-9\">\n                                <div class=\"row\">\n                                    <div class=\"col-12 no-pad-left mt-md-4\">\n                                        <h6><a href=\"/product/").concat(item.link, "\">").concat(item.title, "</a></h6>\n                                        ").concat(optionsHtml, "\n                                    </div>\n                                    <div class=\"col-12 col-md-6 no-pad-left mb-2\">\n                                        <div class=\"input-group\">\n                                            <div class=\"input-group-prepend\">\n                                                <button class=\"btn btn-primary btn-qty-minus\" type=\"button\">-</button>\n                                            </div>\n                                            <input type=\"number\" class=\"form-control cart-product-quantity text-center\" data-cartid=\"").concat(productId, "\" data-id=\"").concat(item.id, "\" maxlength=\"2\" value=\"").concat(item.quantity, "\">\n                                            <div class=\"input-group-append\">\n                                                <button class=\"btn btn-primary btn-qty-add\" type=\"button\">+</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-4 col-md-2 no-pad-left\">\n                                        <button class=\"btn btn-danger btn-delete-from-cart\" data-cartid=\"").concat(productId, "\" type=\"button\"><i class=\"feather\" data-feather=\"trash-2\" data-cartid=\"").concat(productId, "\"></i></button>\n                                    </div>\n                                    <div class=\"col-8 col-md-4 align-self-center text-right\">\n                                        <strong class=\"my-auto\">").concat(result.currencySymbol).concat(productTotalAmount, "</strong>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>");
      });
      $('.cartBodyWrapper').html(productHtml);
    } else {
      $('.cartBodyWrapper').html('');
    }

    $('#cart-count').text(session.totalCartItems); // Set the totals section

    var cartTotalsHtml = "\n            <div class=\"d-flex flex-row\">\n                <div class=\"cart-contents-shipping col-md-12 no-pad-right\">\n                    <div class=\"text-right\">\n                        ".concat(shippingTotal, "\n                    </div>\n                    ").concat(discountTotal, "\n                    <div class=\"text-right\">\n                        Total:\n                        <strong id=\"total-cart-amount\">").concat(result.currencySymbol).concat(totalAmount, "</strong>\n                    </div>\n                </div>\n            </div>");
    var cartTotalsEmptyHtml = "\n            <div id=\"cart-empty\" class=\"d-flex flex-row\">\n                <div class=\"cart-contents-shipping col-md-12 no-pad-left>\n                    Cart empty\n                </div>\n            </div>"; // Set depending on cart contents

    if (cart) {
      $('.cartTotalsWrapper').html(cartTotalsHtml);
      $('.cart-buttons').removeClass('d-none');
    } else {
      $('.cartTotalsWrapper').html(cartTotalsEmptyHtml);
      $('.cart-buttons').addClass('d-none');
    }

    feather.replace();
  }).fail(function (result) {
    showNotification(result.responseJSON.message, 'danger');
  });
}

function upperFirst(value) {
  return value.replace(/^\w/, function (chr) {
    return chr.toUpperCase();
  });
} // eslint-disable-next-line no-unused-vars


function emptyCart() {
  $.ajax({
    method: 'POST',
    url: '/product/emptycart'
  }).done(function (msg) {
    showNotification(msg.message, 'success', true);
    updateCartDiv();
  });
}