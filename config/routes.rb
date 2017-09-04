Rails.application.routes.draw do

  devise_for :users


  resources :builds

  # get '/:user_id' => 'builds#user_builds', as: :user_builds

  get '/playersportal' => 'builds#user_builds'

  root 'welcome#index'

  get 'about' => 'welcome#about'

  get 'gallery' => 'welcome#gallery'

  get 'contact' => 'welcome#contact'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
