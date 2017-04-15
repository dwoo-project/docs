FROM ruby:latest
MAINTAINER Peter Etelej <peter@etelej.com>

RUN apt-get -qq update && \
	apt-get -qq install nodejs -y && \
	apt-get install -y locales && \
	gem install -q bundler && \
	gem install -q hash-joiner

RUN mkdir -p /etc/jekyll && \
	echo 'source "https://rubygems.org"' >> /etc/jekyll/Gemfile && \
	echo 'gem "github-pages"' >> /etc/jekyll/Gemfile && \
	echo 'gem "execjs"' >> /etc/jekyll/Gemfile && \
	echo 'gem "rouge"\ngem "hash-joiner"' >> /etc/jekyll/Gemfile && \
	echo 'gem "jekyll-github-metadata"' >> /etc/jekyll/Gemfile && \
	printf "\nBuilding required Ruby gems.\n\n" && \
	bundle install --gemfile /etc/jekyll/Gemfile --clean

RUN apt-get clean && \
	rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENV BUNDLE_GEMFILE /etc/jekyll/Gemfile

EXPOSE 4000

ENTRYPOINT ["bundle", "exec"]

CMD ["jekyll", "serve","--host=0.0.0.0"]
