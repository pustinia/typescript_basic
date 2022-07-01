FROM rabbitmq:3-management-alpine
ENV RABBITMQ_CONF=/etc/rabbitmq/rabbitmq.conf
#ENV RABBITMQ_PLUGINS=/etc/rabbitmq/enabled_plugins

RUN apk update && \
    apk --no-cache upgrade

# set rabbitmq.conf file.
RUN echo -e \
    "default_user = admin\n" \
    "default_pass = admin\n" \
    "default_vhost = /\n" \
    "listeners.tcp.default = 5672\n" \
    "management.tcp.port = 15672\n" \
    "management.tcp.ip = 0.0.0.0\n" \
    "log.file.level = debug\n" \
    "log.dir = /var/log/rabbitmq\n" \
    "log.file.rotation.date = \$D0\n" \
    "log.file.rotation.size = 10485760\n" \
    "log.file.rotation.count = 10\n" >> ${RABBITMQ_CONF}
    #log.file = rabbit.log # move to compose file

# set enabled_plugins, now work..
#RUN echo -e "[rabbitmq_management,rabbitmq_prometheus,rabbitmq_shovel]." >> ${RABBITMQ_PLUGINS}

#COPY ./run_cluster/dist/${RUN_CLUSTER} /home/
#RUN /home/${RUN_CLUSTER} &

# set erlang cookie value.
#RUN echo "cookie-value-data" >> $HOME/.erlang.cookie && \
#    chown rabbitmq:rabbitmq $HOME/.erlang.cookie  && \
#    chmod 600 $HOME/.erlang.cookie
# set config files