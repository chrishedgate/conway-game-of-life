require 'conway'

describe "A cell" do

  context "#self.dead_cell" do
    cell = Cell.dead_cell()
    
    it "is dead on arrival" do
      cell.alive?.should == false
    end
    
    it "still dead if lonely" do       
      no_neighbors = []
      cell.will_live?(no_neighbors).should == false
    end           
    
    it "should rise from the dead with three live neighbors" do
      three_live_neighbors = [Cell.live_cell(), Cell.live_cell(), Cell.live_cell()]
      cell.will_live?(three_live_neighbors).should == true
    end                         
    
    it "should rise from the dead with three live neighbors and a dead one" do
      neighbors = [Cell.dead_cell(), Cell.live_cell(), Cell.live_cell(), Cell.live_cell()]
      cell.will_live?(neighbors).should == true
    end
  end           
  
  context "#self.live_cell" do
    cell = Cell.live_cell()
    
    it "is alive on arrival" do
      cell.alive?.should == true
    end                                 
    
    it "should survive with two live neighbors" do
      neighbors = [Cell.live_cell(), Cell.live_cell()]
      cell.will_live?(neighbors).should == true
    end
  end
end