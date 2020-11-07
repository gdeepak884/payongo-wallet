<?php 
include("app_logic.php");
if(empty($_SESSION['email'])){
          header("Location: index.php");
          exit;
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link  media="all"  rel="stylesheet" href="http://my.softstack-research.co/framework.css" />
  <link  media="all"  rel="stylesheet" href="http://my.softstack-research.co/site.css" />
  <link  media="all"  rel="stylesheet" href="http://my.softstack-research.co/style.css" />
  <link  media="all"  rel="stylesheet" href="https://my.softstack-research.co/framework.css" />
  <link  media="all"  rel="stylesheet" href="https://my.softstack-research.co/site.css" />
  <link  media="all"  rel="stylesheet" href="https://my.softstack-research.co/style.css" />

<meta name="viewport" content="width=device-width">
  <title>Password Sent!</title>
  <link rel="fluid-icon" href="icon.png" title="SoftStack">
  <meta name="selected-link" value="http://my.softstack-research.co/reset" data-pjax-transient>
  <meta name="user-login" content="SoftStack Reset Password">
  <link rel="canonical" href="http://my.softstack-research.co/reset" data-pjax-transient>
  <link rel="mask-icon" style="border-radius: 50%;" href="http://my.softstack-research.co/icon.png" color="#000000">
  <link rel="icon" type="image/x-icon" style="border-radius: 50%;" class="js-site-favicon" href="http://my.softstack-research.co/icon.png">
<!--ico-->
  <meta name="theme-color" content="#1e2327">
  </head>

  <body class="logged-out env-production page-responsive session-authentication" style="background-color: #4a0307;">
  <div class="position-relative js-header-wrapper ">
    <a href="pending.php" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>
 <div class="header header-logged-out width-full pt-5 pb-4" role="banner">
  <div class="container clearfix width-full text-center">
    <a class="header-logo" href="http://softstack-research.co/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <img style="border-radius: 50%" src="icon.png" height="48" viewBox="0 0 16 16" version="1.1" width="48" aria-hidden="true"></img>
    </a>
  </div>
</div>
</div>
<div id="start-of-content" class="show-on-focus"></div>
<div class="application-main " data-commit-hovercards-enabled>
      <main id="js-pjax-container" data-pjax-container>
<div class="auth-form px-3" id="login">
<form action="index.php" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="bUAaPxs2ferXPbmbMpPr7o117lx2SICsqHk1aodRz6FgdN9CFYgJr/VFbCnVPCWsALKb+mXYj2icXxeTKTtCXg==" />      <input type="hidden" name="ga_id" class="js-octo-ga-id-input">
      <div class="auth-form-header p-0">
        <h1 style="color:#fff;">Reset your password</h1>
      </div>
      <div id="js-flash-container">
</div>
      <div class="auth-form-body mt-3">
	    <p style="color: black;">Check your email (<b style="color: blue;"><?php  echo $_SESSION['email'] ?></b>) for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder too.

</p>
<input type="submit"  value="Return to login" tabindex="3" class="btn btn-dark btn-block" />
      </div>
</form>
</div>
      </main>
  </div>
  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script type="application/javascript" src="http://my.softstack-research.co/assets/bootstrap.js"></script>
    <script type="application/javascript" src="http://my.softstack-research.co/assets/framework.js"></script>

    <script type="application/javascript" src="http://my.softstack-research.co/assets/site.js"></script>
    <script type="application/javascript" src="https://my.softstack-research.co/assets/bootstrap.js"></script>
    <script type="application/javascript" src="https://my.softstack-research.co/assets/framework.js"></script>

    <script type="application/javascript" src="https://my.softstack-research.co/assets/site.js"></script>



  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>
<?php
session_unset();
session_destroy();
?>
