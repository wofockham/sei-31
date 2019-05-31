class Book < ApplicationRecord
  belongs_to :user, :optional => true
end
