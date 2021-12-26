class SurfDay < ApplicationRecord
  has_many :forecasts
  validates_presence_of :title
  has_rich_text :description
end
