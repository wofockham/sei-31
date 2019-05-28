class Fruit < ApplicationRecord
  belongs_to :shelf, :optional => true

  def squishy?
    true
  end
end
