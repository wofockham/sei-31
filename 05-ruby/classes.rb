require 'pry'

# Superclass
class Actor
  def award_speech
    "I would like to thank my parents and my agent. We did it baby"
  end

  def deny_allegations
    "I deny that and I was drunk and I don't remember and he's not that attractive"
  end
end

class Stooge < Actor
  def terrible?
    true
  end
end

class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice

  def initialize(n='', i='', v='hating fascism')
    @name = n
    @instrument = i
    @vice = v
  end

  def perform
    "My name is #{ @name } and I play the #{ @instrument }"
  end
end


groucho = MarxBrother.new 'Groucho Julius Marx', 'guitar', 'cigars'
# groucho.name = 'Groucho Julius Marx'
# groucho.instrument = 'guitar'
# groucho.vice = 'cigars'

harpo = MarxBrother.new
harpo.name= 'Harpo Marx'
harpo.instrument= 'harp'

binding.pry
