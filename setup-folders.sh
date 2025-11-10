#!/bin/bash

# Tạo toàn bộ thư mục chuẩn Nuxt 3
mkdir -p \
  pages \
  components/{ui,layout,common} \
  layouts \
  composables \
  stores \
  utils \
  assets/{css,images,icons} \
  public \
  server/{api,middleware} \
  plugins \
  middleware \
  types \
  tests/{unit,e2e}

echo "Tất cả thư mục đã được tạo thành công!"