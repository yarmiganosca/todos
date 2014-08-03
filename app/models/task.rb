class Task < ActiveRecord::Base
  validates_presence_of :text

  scope :in_creation_order, -> { order("created_at asc") }
  scope :completed, -> { where("completed is not null") }
end
