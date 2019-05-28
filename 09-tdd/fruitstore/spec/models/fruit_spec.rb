require 'rails_helper'

RSpec.describe Fruit, type: :model do
  it { should belong_to(:shelf).optional }

  describe "an apple" do
    before do
      @apple = Apple.create :name => 'Golden Delicious'
    end

    it "should not be squishy" do
      expect(@apple.squishy?).to be false
    end

    it "should remember the class using Single Table Inheritance (STI)" do
      apple = Fruit.find @apple.id
      expect(apple).to_not be_nil
      expect(apple.class).to eq Apple
      expect(apple).to eq @apple
      expect(apple.is_a?(Fruit)).to be true
      expect(apple.class.ancestors).to include(Fruit)
    end
  end

  describe "a pear" do
    before do
      @pear = Pear.create :name => 'Nashi'
    end

    it "should be kinda squishy" do
      expect(@pear.squishy?).to be true
    end

    it "should remember the class using Single Table Inheritance (STI)" do
      pear = Fruit.find @pear.id
      expect(pear).to_not be_nil
      expect(pear.class).to eq Pear
      expect(pear).to eq @pear
      expect(pear.is_a?(Fruit)).to be true
      expect(pear.class.ancestors).to include(Fruit)
    end
  end
end
