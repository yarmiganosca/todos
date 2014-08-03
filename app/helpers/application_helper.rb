module ApplicationHelper
  def render_ng_templates
    ng_views_path = "#{Rails.root}/app/views/ng/"

    Dir["#{ng_views_path}**/*.html.*"].map do |path|
      template_path = path.sub(ng_views_path, '')

      partial_path  = template_path.sub(/\/_/, '/')
      view_path     = partial_path.sub(/\..*$/, '')

      "<script type='text/ng-template' id='#{view_path}.html'>#{render(partial_path)}</script>"
    end.join.html_safe
  end
end
