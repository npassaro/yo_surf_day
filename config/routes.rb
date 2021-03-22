Rails.application.routes.draw do

  root to: 'home#index'

  resources :surf_days, only: [:index, :show, :create, :update, :destroy]
end
