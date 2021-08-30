<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>-- Your Renter --</title>
    <link rel="stylesheet" href="/public/css/style.css">
    <link rel="shortcut icon" href="/public/img/user.png" type="image/png">
</head>
<body>
<header class="header container">
    <a href="?">
        <div class="logo">Logo</div>
    </a>
</header>
<article class="wrap container">
    <?= $content;?>
</article>
<?= $htmlScripts;?>
</body>
</html>
<!--
6  views/main/default.php
Viewed
@@ -0,0 +1,6 @@
<form action="?" class="wrap_form" method="post">
    <div class="wrap_logo">L</div>
    <input type="hidden" name="mainTemplate" value="main">
    <input class="wrap_button" name="contentTemplate" type="submit" value="Войти">
    <input class="wrap_button" name="contentTemplate" type="submit" value="Регистрация">
</form>
-->