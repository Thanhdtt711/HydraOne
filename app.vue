<template>
      <Html class="dark">

      <Body>
            <TooltipProvider>
                  <NuxtLayout>
                        <NuxtPage />
                  </NuxtLayout>
            </TooltipProvider>
      </Body>

      </Html>
</template>
<script setup>
import { TooltipProvider } from 'reka-ui';
</script>