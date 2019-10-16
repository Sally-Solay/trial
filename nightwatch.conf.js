module.exports = {
    
        "src_folders" : ["tests"],
      
        "webdriver" : {
          "start_process": true,
          "server_path": "node_modules/.bin/chromedriver",
          // "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
          "port": 9515
        },
      
        "test_settings" : {
          "default" : {
            "screeshots": {
              "enabled": true,
              "on_failure": true,
              "on_error": true,
              "path": "tests_ouput/screeshots"
            },
            "desiredCapabilities": {
              "browserName": "chrome",
              "chromeOptions":{
                "args": ["--headless"]
              }
            }
          }
        }
     
      
}