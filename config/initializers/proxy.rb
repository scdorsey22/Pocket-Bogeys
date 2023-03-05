# config/initializers/proxy.rb

require 'rack/proxy'

class ReactProxy < Rack::Proxy
  def perform_request(env)
    if env['PATH_INFO'].start_with?('/static', '/sockjs-node')
      # Serve static assets and websockets without proxying
      @app.call(env)
    else
      # Proxy all other requests to the Create React App server
      env['HTTP_HOST'] = 'localhost:3000'
      env['REQUEST_PATH'] = '/'
      super(env)
    end
  end
end

Rails.application.config.middleware.insert_before 0, ReactProxy
