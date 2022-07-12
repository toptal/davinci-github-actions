FROM alpine:3.16

RUN apk add --update nodejs yarn

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]