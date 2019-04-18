# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  has_many :songs
end
