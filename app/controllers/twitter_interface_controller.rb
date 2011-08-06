class TwitterInterfaceController < ApplicationController
  def index
    
    Twitter.configure do |config|
      config.consumer_key = "3PBqHBgt4Y61U11ZlGlA"
      config.consumer_secret = "gNYJokABoT0xG0zxrbC4hKomvUFLCKTEYd8oz51A"
      config.oauth_token = "28293-DOElVB1TCNOwID7GT80xyPveeiUccn0ll3nyh56BSc"
      config.oauth_token_secret = "5QUynf39h5PBbLF0njijyVrR481dgVqlOQAC026Y8L4"
    end
    
    client = Twitter::Client.new
    @messages = client.direct_messages
  end
end
