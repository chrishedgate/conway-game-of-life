require 'rubygems'
require 'spork'

Spork.prefork do
end

Spork.each_run do
  Dir[
     File.join(File.dirname(__FILE__), '..', 'lib/**/*.rb')
    ].each { |f| load f }
end

$LOAD_PATH.unshift(File.join(File.dirname(__FILE__), '..', 'lib'))

require 'rspec'
require 'rspec/autorun'

RSpec.configure do |config|
  config.mock_with :rspec
end
