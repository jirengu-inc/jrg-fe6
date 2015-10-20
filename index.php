<!doctype html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1" />
    <meta name="viewport" content="width=device-width">
    <title>6班作业</title>
    <!-- Flatdoc -->
    <script src='support/vendor/jquery.js'></script>
    <script src='support/legacy.js'></script>
    <script src='support/flatdoc.js'></script>
    <!-- Flatdoc theme -->
    <link href='support/theme-white/style.css' rel='stylesheet'>
    <script src='support/theme-white/script.js'></script>
    <link href='support/theme.css' rel='stylesheet'>
    <link href="//cdn.bootcss.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet">
    <style type="text/css">

        html, body {margin: 0; padding: 0; height: 100%; width: 100%; background-color: #f0f0f0; }
        .wrapper {font-family: "Microsoft YaHei",monospace,sans-serif; width: 90%; margin: auto; }
        .tree {margin: -30px 30px 0;}
        .tree > ul > li:before,
        .tree > ul > li:after{display: none; }
        .tree li {position: relative; list-style: none; margin: 0; padding: .5em 1em; color: #16a085; }
            .tree li:before,
            .tree li:after {content: ""; position: absolute; left: -.1em; top: -1.1em; width: 1em; }
            .tree li:before{height: 2.3em; border-bottom: 2px solid #16a085; }
            .tree li:after{height: 100%; border-left: 2px solid #16a085; }
            .tree li:nth-child(1):before{height: 1em; top: .2em; }
            .tree li:last-child:after{height: 2.3em; }
        .tree span {position: relative; z-index: 1; padding: .2em .5em .2em 1em; border-radius: .5em; background-color: #16a085; color: white; cursor: pointer; }
            .tree span i{margin-left: .5em; }

    </style>
    <!-- Initializer -->

</head>

<body role='flatdoc'>
    <div class='header'>
        <div class='left'>
            <h1> <a class="site-title" href="http://www.jirengu.com">
<img src="http://jirengu.com/data/upload/2015/0731/15/55bb23fc43c54.png" style="width: 135px;height: 40px;">
</a></h1>
        </div>
    </div>
    <div class='content-root'>
        <div class='menubar'>
            <div class='menu section' role='flatdoc-menu'></div>
        </div>
        <div class="content">
            <h1>目录</h1>
            <h2></h2>
        </div>
        <div class="tree">
            
        <?php  
            $path = "./";  
          
            function createDir($path = '.')  
            {     
                if ($handle = opendir($path))   
                {  
                    echo "<ul>";  
                  
                    while (false !== ($file = readdir($handle)))   
                    {  
                        if (is_dir($path.$file) && $file != '.' && $file !='..' && substr($file, 0, 1) !='.'  &&$file!='support' && $file!='vendor' && $file != 'Procfile' && $file != 'README.md' && $file != 'index.php' && $file != 'composer.json')  
                            printSubDir($file, $path, $queue);  
                        else if ($file != '.' && $file !='..'  && substr($file, 0, 1) !='.' &&$file!='support' && $file!='vendor'&& $file != 'Procfile' && $file != 'README.md' && $file != 'index.php' && $file != 'composer.json')  
                            $queue[] = $file;  
                    }  
                      
                    printQueue($queue, $path);  
                    echo "</ul>";  
                }  
            }  
              
            function printQueue($queue, $path)  
            {  
                if(sizeof($queue)>0){
                    foreach ($queue as $file)   
                    {  
                        printFile($file, $path);  
                    }  
                }
 
            }  
              
            function printFile($file, $path)  
            {  
                echo '<li><a target="_blank" href="' . $path . $file . '">'. $file.'</a></li>';  
            }  
              
            function printSubDir($dir, $path)  
            {  
                echo "<li><span>$dir</span>";  
                createDir($path.$dir."/");  
                echo "</li>";  
            }  
              
            createDir($path);  
        ?>  
  

        </div>

        <div role='flatdoc-content' class='content'></div>
    </div>
    <script src="support/theme-white/zoom.js"></script>
    <script type="text/javascript">

        $(function() {
            $(".tree span").append($("<i class='fa fa-plus fa-fw'></i>"));
            $(".tree>ul ul").hide();
            $(".tree span").click(function(event) {
                var $this = $(this);
                var $ul = $this.parent().children("ul");

                if ($ul.length > 0) {
                    if($ul.is(":visible")){
                        $ul.slideUp();
                        $this.children("i").removeClass("fa-minus").addClass("fa-plus");
                    } else {
                        $ul.slideDown();
                        $this.children("i").removeClass("fa-plus").addClass("fa-minus");
                    }
                }
            });
            Flatdoc.run({
                fetcher: Flatdoc.file('README.md')
            });    
        });



    </script>
    <!-- -->
</body>

</html>