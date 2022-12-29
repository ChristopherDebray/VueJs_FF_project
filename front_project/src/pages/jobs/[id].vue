<script setup>
import TwoColumnDescriptiveLayout from '../../layouts/twoColumnDescriptive.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi'
import ClassLine from '../../components/oneLineBlocks/ClassLine.vue';
const route = useRoute()
const jobInfos = await XivMethodsApi.getBasicJobDetails(route.params.id)
const ClassJobParent = jobInfos.ClassJobParent;
console.log(jobInfos)

</script>

<template>
    <TwoColumnDescriptiveLayout>
        <template #title>
        </template>
        <template #sideBar>
            <!-- Will contain the parent job if the job has one (the api doesn't seem to have job descriptions) -->
                <ul v-if="ClassJobParent">
                    <li>
                        <ClassLine
                            :className="ClassJobParent.Name"
                            :classIconUrl="XivMethodsApi.getBaseApiUrl()+ClassJobParent.Icon"
                            :classId="ClassJobParent.ID"
                        />
                    </li>
                    <li>Starting level : {{ ClassJobParent.StartingLevel }}</li>
                    <li>Starting town : {{ ClassJobParent.StartingTown }}</li>
                </ul>
        </template>
        <template #content>
            <!-- Will contain the job infos -->
            <ul>
                <li>
                    <ClassLine
                        :className="jobInfos.Name"
                        :classIconUrl="XivMethodsApi.getBaseApiUrl()+jobInfos.Icon"
                        :classId="jobInfos.ID"
                    />
                </li>
                <li>Role : {{ $filters.stringifyJobRole(jobInfos.Role) }}</li>
                <li>Job category : {{ jobInfos.ClassJobCategory.Name }}</li>
                <li>Starting level : {{ jobInfos.StartingLevel }}</li>
                <li>Starting town : {{ jobInfos.ItemStartingWeapon.ClassJobUse?.StartingTown?.Name }}</li>
                <li v-if="jobInfos.UnlockQuest.ClassJobLevel0">Level required for unlocking : {{ jobInfos.UnlockQuest.ClassJobLevel0 }}</li>
            </ul>
        </template>
    </TwoColumnDescriptiveLayout>
</template>

<style>

</style>