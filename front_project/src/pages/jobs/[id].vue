<script setup>
import TwoColumnDescriptiveLayout from '../../layouts/twoColumnDescriptive.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi'
const route = useRoute()
const jobInfos = await XivMethodsApi.getBasicJobDetails(route.params.id)
const ClassJobParent = jobInfos.ClassJobParent;
console.log(jobInfos)

/*
- Icon
- Name
- `StartingLevel` (the level at which the class starts)
- UnlockQuest.`ClassJobLevel0` (the level at which we can unlock the class)
- Description on the side
- Starting town
- `ClassJobParent` if it has one (paladin ⇒ gladiator) with it’s infos
    - Name
    - Icon
    - `StartingLevel`
    - Starting town

{
    "ClassJobCategory": {
        "Name": "Disciple of War"
    },
    "ClassJobParent": {
        "Abbreviation": "MRD",
        "ID": 3,
        "Icon": "\/cj\/1\/marauder.png",
        "IsLimitedJob": 0,
        "ItemSoulCrystal": 0,
        "Name": "marauder",
        "NameEnglish": "Marauder",
        "NameEnglish_en": "Marauder",
        "Role": 1,
        "StartingLevel": 1,
        "StartingTown": 1,
    },
    "ID": 21,
    "Icon": "\/cj\/1\/warrior.png",
    "Name": "warrior",
    "Role": 1,
    "StartingLevel": 1,
    "UnlockQuest": {
        "ClassJobLevel0": 30
    }
}
*/

</script>

<template>
    <TwoColumnDescriptiveLayout>
        <template #title>
            Job
        </template>
        <template #sideBar>
            <!-- Will contain the parent job if the job has one (the api doesn't seem to have job descriptions) -->
            <router-link to="/jobs/{{ClassJobParent.ID}}" v-if="ClassJobParent">
                <ul>
                    <li>{{ ClassJobParent.Icon }}</li>
                    <li>{{ ClassJobParent.Name }}</li>
                    <li>{{ ClassJobParent.StartingLevel }}</li>
                    <li>{{ ClassJobParent.StartingTown }}</li>
                </ul>
            </router-link>
        </template>
        <template #content>
            <!-- Will contain the job infos -->
            <ul>
                
                <li>{{ jobInfos.Icon }}</li>
                <li>{{ jobInfos.Name }}</li>
                <li>{{ stringifyJobRole(jobInfos.Role) }}</li>
                <li>{{ jobInfos.ClassJobCategory }}</li>
                <li>{{ jobInfos.StartingLevel }}</li>
                <li>{{ jobInfos.StartingTown }}</li>
                <li v-if="jobInfos.UnlockQuest.ClassJobLevel0">{{ jobInfos.UnlockQuest.ClassJobLevel0 }}</li>
            </ul>
        </template>
    </TwoColumnDescriptiveLayout>
</template>

<style>

</style>