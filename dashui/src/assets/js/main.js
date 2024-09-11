/*
=========================================================
* Dash UI - Bootstrap 5 Admin & Dashboard Theme
=========================================================
* Version: 1.0.0
* Product Page: https://codescandy.com/dashui/index.html
* Designed and coded by https://codescandy.com
========================================================= */

/*


------ Functions --------

:: Multi level menu dropdown
:: Menu toggle for admin dashboard
:: Tooltip
:: Popover
:: Scrollspy
:: Toast
:: Offcanvas
:: Quill editor
:: Flatpickr
:: File Input
:: Slider TNS
:: Check all for checkbox
:: Kanban
:: Print for Invoice
:: Alert


 */



'use strict';


(function () {

  // Multi level menu dropdown
  if ($(".dropdown-menu a.dropdown-toggle").length) {
    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
      if (!$(this)
        .next()
        .hasClass("show")
      ) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  }



  // Menu toggle for admin dashboard
  if ($("#nav-toggle").length) {
    $("#nav-toggle").on("click", function (e) {
      e.preventDefault();
      $("#main-wrapper").toggleClass("toggled");
    });

  }



  // Tooltip
  if ($('[data-bs-toggle="tooltip"]').length) {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }



  // Default Popover
  if ($('[data-bs-toggle="popover"]').length) {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })

  }



  // Scrollspy
  // if ($('[data-bs-spy="scroll"]').length) {
  //   var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
  //   dataSpyList.forEach(function (dataSpyEl) {
  //     bootstrap.ScrollSpy.getInstance(dataSpyEl)
  //       .refresh()
  //   })

  // }



  // Toast
  if ($('.toast').length) {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl)
    })

  }



  // Offcanvas
  if ($(".offcanvas").length) {
    var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
    var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
      return new bootstrap.Offcanvas(offcanvasEl)
    })

  }



  // Quill editor
  if ($("#editor").length) {
    var quill = new Quill('#editor', {
      modules: {
        toolbar: [
          [{
            header: [1, 2, false]
          }],
          [{
            'font': []
          }],
          ['bold', 'italic', 'underline', 'strike'],
          [{
            'size': ['small', false, 'large', 'huge']
          }],
          [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }],
          [{
            'color': []
          }, {
            'background': []
          }, {
            'align': []
          }],
          ['link', 'image', 'code-block', 'video'],
        ]
      },
      theme: 'snow'
    });
  }





  // Flatpickr
  if ($(".flatpickr").length) {
    flatpickr(".flatpickr", {
      disableMobile: true

    });

  }



  // File Input
  if ($(".file-input").length) {
    $('.file-input').change(function () {
      var curElement = $(this).parent().parent().find('.image');
      console.log(curElement);
      var reader = new FileReader();

      reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
      };

      // read the image file as a data URL.
      reader.readAsDataURL(this.files[0]);
    });

  }



  // slider for product
  if ($('.product').length) {
    var slider = tns({
      "container": "#product",
      "items": 1,
      "startIndex": 1,
      "navContainer": "#product-thumbnails",
      "navAsThumbnails": true,
      "autoplay": false,
      "autoplayTimeout": 1000,
      "swipeAngle": false,
      "speed": 400,
      "controls": false,

    });


  }



  // Check all for  checkbox
  if ($("#checkAll").length) {
    $("#checkAll").on("click", function () {
      $('input:checkbox').not(this).prop('checked', this.checked);
    });
  }



  // Kanban
  if ($("#do").length) {
    dragula([document.querySelector('#do'),
      document.querySelector('#progress'),
      document.querySelector('#review'),
      document.querySelector('#done')
    ]);
  }




  // Print for invoice
  if ($("#invoice").length) {
    $("#invoice").find('.print-link').on('click', function () {
      //Print invoice with default options
      $.print("#invoice");
    });
  }


  // Sidebar menu
  if ($(".sidebar-nav-fixed a").length) {
    $(".sidebar-nav-fixed a")
      // Remove links that don't actually link to anything
      .on("click", function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 90
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        };
        $('.sidebar-nav-fixed a').each(function () {
          $(this).removeClass('active');
        })
        $(this).addClass('active');
      });
  }



  // Alert
  if ($('#liveAlertPlaceholder').length) {
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    var alertTrigger = document.getElementById('liveAlertBtn')

    function alert(message, type) {
      var wrapper = document.createElement('div')
      wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

      alertPlaceholder.append(wrapper)
    }

    if (alertTrigger) {
      alertTrigger.addEventListener('click', function () {
        alert('Nice, you triggered this alert message!', 'success')
      })
    }
  }

  //  Input tags (Tagify)

  if ($("input[name=tags]").length) {
    var input = document.querySelector('input[name=tags]');
    new Tagify(input)

  }

})();





