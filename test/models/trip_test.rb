# == Schema Information
#
# Table name: trips
#
#  id              :integer          not null, primary key
#  guest_id        :integer          not null
#  lair_id         :integer          not null
#  check_in_date   :date             not null
#  check_out_date  :date             not null
#  num_guests      :integer          not null
#  created_at      :datetime
#  updated_at      :datetime
#  approval_status :string(255)      default("pending")
#

require 'test_helper'

class TripTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
