#
configure :development do
  activate :livereload
end
#
activate :directory_indexes
activate :automatic_image_sizes
activate :syntax
#
# github userpages deploy
activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true
  deploy.branch   = "master"
  deploy.remote   = "git@github.com:omarfs/omarfs.github.io.git"
  #https://github.com/omarfs/omarfs.github.io.git
end
# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end
# set host for responsive images 
#activate :asset_host
#set :asset_host, 'http://localhost:4567'
#
set :markdown

set :css_dir, 'assets/stylesheets'

set :js_dir, 'assets/javascripts'

set :images_dir, 'assets/images'

set :layouts_dir, '_layouts'

set :helpers_dir, 'lib/helpers'

after_configuration do
	sprockets.append_path File.join "#{root}", 'source/assets/_vendor'
end

# Build-specific configuration
configure :build do
	activate :minify_css
	activate :minify_javascript
	activate :relative_assets
	activate :asset_hash
end