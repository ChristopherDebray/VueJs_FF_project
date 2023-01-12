<script setup>
import ClassLine from '../../components/oneLineBlocks/ClassLine.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi'
import stringifyJobRole from '../../filters/stringifyJobRole'
import { onBeforeMount, onMounted, watch } from '@vue/runtime-core';

const props = defineProps({
    job: Object
})


</script>

<template>
    <ul v-if='job.ClassJobCategory'>
        <li>
            <ClassLine
                :className="job.Name"
                :classIconUrl="XivMethodsApi.getBaseApiUrl()+job.Icon"
                :classId="job.ID"
            />
        </li>
        <li>Role : {{ stringifyJobRole(job.Role) }}</li>
        <li>Job category : {{ job.ClassJobCategory.Name }}</li>
        <li>Starting level : {{ job.StartingLevel }}</li>
        <li v-if="job.ItemStartingWeapon.ClassJobUse">Starting town : {{ job.ItemStartingWeapon.ClassJobUse?.StartingTown?.Name }}</li>
        <li v-if="job.UnlockQuest.ClassJobLevel0">Level required for unlocking : {{ job.UnlockQuest.ClassJobLevel0 }}</li>
    </ul>
</template>