class Cell       
  def initialize(is_alive = false)
    @alive = is_alive
  end
    
  def self.dead_cell
    self.new
  end       
  
  def self.live_cell
    self.new(true)
  end
  
  def will_live?(neighbors)
    length = neighbors.find_all { |n| n.alive? }.length
    length == 3 || (length == 2 && alive?)
  end    
  
  def alive?
    @alive
  end
end