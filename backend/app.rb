require 'sinatra/base'
require 'sinatra/cross_origin'
require 'secure_headers'

::SecureHeaders::Configuration.configure do |config|
  config.csp = {
    default_src: 'localhost:4200',
    connect_src: 'self localhost:4200',
  }
end

class Backend < Sinatra::Base
  include SecureHeaders
  register Sinatra::CrossOrigin

  configure do
    enable :cross_origin
  end

  post '/comments' do
    cross_origin
    set_csp_header
    puts "Creating a comment (not really)..."
    puts params.inspect
  end

  run! if app_file == $0
end
