// سكريبت السلايدر
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentSlide = 0;
  const slideInterval = 5000; // 5 ثواني لكل شريحة

  // عرض الشريحة الحالية
  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  // الانتقال إلى الشريحة التالية
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // الانتقال إلى الشريحة السابقة
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // بدء السلايدر التلقائي
  let slideTimer = setInterval(nextSlide, slideInterval);

  // إضافة أحداث النقر للأزرار
  nextBtn.addEventListener("click", function () {
    clearInterval(slideTimer);
    nextSlide();
    slideTimer = setInterval(nextSlide, slideInterval);
  });

  prevBtn.addEventListener("click", function () {
    clearInterval(slideTimer);
    prevSlide();
    slideTimer = setInterval(nextSlide, slideInterval);
  });

  // إضافة أحداث النقر للنقاط
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      clearInterval(slideTimer);
      showSlide(index);
      slideTimer = setInterval(nextSlide, slideInterval);
    });
  });

  // إضافة أحداث لإيقاف السلايدر عند تحويم الماوس
  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseenter", function () {
    clearInterval(slideTimer);
  });

  slider.addEventListener("mouseleave", function () {
    slideTimer = setInterval(nextSlide, slideInterval);
  });

  // سكريبت سلة التسوق
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartCount = document.querySelector(".cart-count");
  let cartItemsCount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      cartItemsCount++;
      cartCount.textContent = cartItemsCount;

      // تأثير عند الإضافة إلى السلة
      const productCard = this.closest(".product-card");
      productCard.style.transform = "scale(1.05)";
      setTimeout(() => {
        productCard.style.transform = "scale(1)";
      }, 300);

      // يمكنك هنا إضافة المنتج إلى سلة التسوق الفعلية
    });
  });

  // سكريبت زيادة/تقليل الكمية في السلة
  const quantityBtns = document.querySelectorAll(".quantity-btn");
  quantityBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const quantityElement = this.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);

      if (this.classList.contains("plus")) {
        quantity++;
      } else if (this.classList.contains("minus") && quantity > 1) {
        quantity--;
      }

      quantityElement.textContent = quantity;

      // يمكنك هنا تحديث السعر الإجمالي بناءً على الكمية الجديدة
    });
  });

  // سكريبت إزالة العنصر من السلة
  const removeItemBtns = document.querySelectorAll(".remove-item");
  removeItemBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const cartItem = this.closest(".cart-item");
      cartItem.style.transform = "translateX(100px)";
      cartItem.style.opacity = "0";

      setTimeout(() => {
        cartItem.remove();
        // يمكنك هنا تحديث المجموع الكلي بعد الإزالة
      }, 300);
    });
    document.addEventListener('DOMContentLoaded', function() {
    // كل الكود السابق يوضع هنا لضمان تنفيذه بعد تحميل DOM
});
 
 
  });
});
