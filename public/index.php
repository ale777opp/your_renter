<?php

 use App\controllers\Controller;

 include $_SERVER['DOCUMENT_ROOT'] .
    '/config/const.php';

 include $_SERVER['DOCUMENT_ROOT'] .
    '/services/Autoload.php';

 spl_autoload_register([new Autoload(),'loadClass']);

// include $_SERVER['DOCUMENT_ROOT'] . '/config/const.php'; - повторо путь до js файлов

 session_start();

 $controller = new Controller();
