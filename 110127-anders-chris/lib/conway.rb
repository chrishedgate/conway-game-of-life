require 'conway/game'
require 'conway/version'

module Conway
  class Generation
    attr_reader :age

    def initialize(age=0)
      @age = age
    end

    def self.seed(seed)
      self.new
    end

    def tick
      gen = Generation.new(age + 1)
    end

    def to_s
      ''
    end
  end

end
