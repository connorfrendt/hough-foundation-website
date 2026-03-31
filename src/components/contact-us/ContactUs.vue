<template>
  <div class="contact-us-wrapper">
    <div class="main-inner-wrapper">
      <header class="main-header">Contact Us</header>

      <!-- Contact Form -->
      <section class="contact-form-section">
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Your Name *</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div class="form-group">
            <label for="email">Your Email *</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Optional" />
          </div>
          <div class="form-group">
            <label for="subject">Subject *</label>
            <input type="text" id="subject" placeholder="Enter subject" />
          </div>
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" rows="6" placeholder="Write your message here"></textarea>
          </div>
          <button type="submit" class="btn-cta">Send Message</button>
        </form>
      </section>

      <hr />

      <!-- Office Info -->
      <section class="contact-info-section">
        <div class="info-card">
          <h3>Hough Foundation Office</h3>
          <p>205 E. 11th Street<br />Suite 200<br />Vancouver, WA 98660</p>
          <p>Phone: (360) 992-7060</p>
          <p>Jill Campbell - Executive Director<br />JCampbell@HoughFoundation.org</p>
        </div>

        <div class="info-card">
          <h3>Family Service Center</h3>
          <p>Hough School<br />1900 Daniels Street<br />Vancouver, WA 98660</p>
          <p>Phone: (360) 313-2107 | Fax: (360) 695-1201</p>
          <p>Annette Mccabe<br />Family Community Resource & Engagement Coordinator<br />annette.mccabe@vansd.org</p>
        </div>
      </section>

      <!-- Social / Connect -->
      <section class="connect-section">
        <h3>Connect with Us</h3>
        <a href="https://www.facebook.com" target="_blank" class="social-link">Facebook</a>
      </section>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss" src="./contact-us.scss"></style>