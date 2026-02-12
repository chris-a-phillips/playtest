javascript:(function () {
    document.getElementById("first_name").value =
    'Chris';
})();

<div class="field">
  <label for="first_name">First Name <span class="asterisk">*</span></label>
  <input type="text" id="first_name" name="job_application[first_name]" aria-required="true" maxlength="255" autocomplete="given-name">
</div>