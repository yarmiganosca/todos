class Task < ActiveRecord::Base
  validates_presence_of :text

  def self.in_creation_order
    order("created_at asc")
  end
end
