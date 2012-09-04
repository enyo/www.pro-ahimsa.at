<?php

  $siteDir = __DIR__ . "/../sites/";


  function siteFile($site) {
    global $siteDir;
    return "$siteDir$site.html";
  }

  if (isset($_GET['site'])) {
    $site = preg_replace("/[^\w]/", "", $_GET['site']);
    if (!is_file(siteFile($site))) $site = null;
  }

  if (!$site) $site = "aktuelles";

  $siteContent = file_get_contents(siteFile($site));

  if (isset($_GET['onlyContent'])) {
    die($siteContent);
  }

