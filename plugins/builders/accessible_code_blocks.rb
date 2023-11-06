# frozen_string_literal: true

module Builders
  class AccessibleCodeBlocks < SiteBuilder
    def build
      inspect_html do |document|
        document.query_selector_all("pre").each do |anchor|
          anchor[:tabindex] = 0
        end
      end
    end
  end
end
