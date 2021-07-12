class VideoGame < ApplicationRecord
    belongs_to :user 
    validates :title, presence: true, uniqueness: true 
    validates :img_url, presence: true 
end
