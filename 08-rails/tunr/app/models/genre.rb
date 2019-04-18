# == Schema Information
#
# Table name: genres
#
#  id         :bigint(8)        not null, primary key
#  name       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord
  has_and_belongs_to_many :songs
end
