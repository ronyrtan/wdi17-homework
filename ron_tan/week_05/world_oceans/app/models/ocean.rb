# == Schema Information
#
# Table name: oceans
#
#  id        :integer          primary key
#  name      :text
#  image     :text
#  area      :float
#  volume    :float
#  depth     :float
#  coastline :float
#

class Ocean < ActiveRecord::Base
end
