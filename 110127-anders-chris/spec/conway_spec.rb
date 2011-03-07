require File.join(File.dirname(__FILE__), './spec_helper')
require 'conway'

module Conway
  describe 'Conaway Game of Life' do
    it 'version_check' do
      VERSION.should == '0.0.1'
    end
    
    context 'Generation' do
      context "#seed" do
        it 'should return generation' do
          Generation.seed(nil).should be_kind_of(Generation)
        end

        it "should return generation 0" do
          Generation.seed(nil).age.should equal(0)
        end

        it "should generation with empty matrix for empty seed string" do
          Generation.seed('').to_s.should eq('')
        end
      end
      
      context "#tick" do
        it 'should return next generation on tick' do
          Generation.new(0).tick.age.should == 1
        end
        
      end
      
    end
    
  end
end


