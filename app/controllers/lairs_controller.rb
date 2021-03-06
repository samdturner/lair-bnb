class LairsController < ApplicationController
	def new
		@lair = Lair.new()
		# @lair.images.build
	end

	def create
		@lair = Lair.new(lair_params)
		@lair.owner_id = current_user.id if current_user
		if @lair.save
			render json: { success: @lair.id }
		else
			render json: { errors: @lair.errors.full_messages }
		end
	end	

	def show
		@lair = Lair.includes(:images, :trips, { owner: :profile_image }).find(params[:id])
	end

	def update
	end

	def index
		if params[:search]
			@lairs = Lair.includes(:images, :trips, { owner: :profile_image }).search(search_params)
		else
			# it's necessary to use search instead of all here for the results count for pagination
			@lairs = Lair.includes(:images, :trips, { owner: :profile_image }).search()
		end
		# respond_to do |format|
		# 	format.html { render json: Lair.all }
		# 	format.json { render json: @lairs.to_json(include: :images) } 
		# end
	end

	def lair_params
		params.require(:lair).permit(:title, :description, :rate, :owner_id, 
			:lair_type, :room_type, :max_guests, :street_address, :city, :state, :country, 
			:latitude, :longitude, :image_urls)
	end

	def search_params
		params.require(:search).permit(:title, :description, 
			:rate, :room_type, :location, :price_min, :price_max, 
			:page, :max_guests, :check_in_date, :check_out_date, lair_type: [])
	end
end
