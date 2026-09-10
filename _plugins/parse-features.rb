require 'json'

module Jekyll
  module ParseFeatures
    # Parses a bib `features` field into an array of {label, url} hashes.
    #
    # BibTeX strips the outer {} delimiters before passing the value to
    # Jekyll Scholar, so the raw string looks like:
    #   "Label One": "https://...", "Label Two": "https://..."
    # We wrap it in {} to reconstruct valid JSON, then parse it.
    def parse_features(input)
      return [] if input.nil?

      str = input.to_s.strip
      return [] if str.empty?

      # Wrap in {} if not already a JSON object
      str = "{#{str}}" unless str.start_with?('{')

      hash = JSON.parse(str)
      hash.map { |label, url| { 'label' => label, 'url' => url } }
    rescue JSON::ParserError
      []
    end
  end
end

Liquid::Template.register_filter(Jekyll::ParseFeatures)
