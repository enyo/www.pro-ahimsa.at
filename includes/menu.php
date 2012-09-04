<?php


  function parseTree($dir, $menu) {
    echo "<h1>$dir</h1>";
    $files = glob($dir . "/*");

    foreach ($files as $file) {
      if (strpos($file, ".") === 0) continue;

      $item = array("name" => $file, "file" => $file, "children" => array())
      if (is_dir($file)) {
        parseTree($file, $menu);
      }
      else if (strpos($file, ".html") !== -1) {
        echo "FILE: " . $file . "<br />";
      }
    }

  }

  parseTree($siteDir, $MENU);

  die();