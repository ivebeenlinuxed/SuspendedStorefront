#!/bin/bash
/wait-for-it.sh ${MYSQL_SERVER}:${MYSQL_PORT} -t 120 -- dotnet /app/SuspendedStorefront.dll