Rails.application.routes.draw do
  root to: "surf_days#index"
  resources :surf_days do
    resources :forecasts
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
