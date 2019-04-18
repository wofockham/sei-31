# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  title      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  has_many :songs
end
