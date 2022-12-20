<script setup>
import TwoColumnLayout from '../../layouts/twoColumn.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi'
import ClassLine from '../../components/oneLineBlocks/ClassLine.vue';

/*
const classes = await XivMethodsApi.getAllClasses().Results
const middleIndex = Math.ceil(classes.length / 2);
const firstClassesHalf = classes.splice(0, middleIndex);   
const secondClassesHalf = classes.splice(-middleIndex);
*/

const firstClassesHalf = [
    {
        "ID": 1,
        "Icon": "/cj/1/gladiator.png",
        "Name": "gladiator",
        "Url": "/ClassJob/1"
    },
    {
        "ID": 2,
        "Icon": "/cj/1/pugilist.png",
        "Name": "pugilist",
        "Url": "/ClassJob/2"
    }
]

const secondClassesHalf = [
    {
        "ID": 3,
        "Icon": "/cj/1/marauder.png",
        "Name": "marauder",
        "Url": "/ClassJob/3"
    },
    {
        "ID": 4,
        "Icon": "/cj/1/lancer.png",
        "Name": "lancer",
        "Url": "/ClassJob/4"
    }
]

console.log()
</script>

<template>
    <TwoColumnLayout>
        <template #title>
            Classes
        </template>
        <template #leftSide>
            <ul>
                <li v-for="job in firstClassesHalf" :key="job">
                    <ClassLine
                        :className="job.Name"
                        :classIconUrl="XivMethodsApi.getBaseApiUrl()+job.Icon"
                        :classId="job.ID"
                    />
                </li>
            </ul>
        </template>
        <template #rightSide>
            <ul>
                <li v-for="job in secondClassesHalf" :key="job">
                    <ClassLine
                        :className="job.Name"
                        :classIconUrl="XivMethodsApi.getBaseApiUrl()+job.Icon"
                        :classId="job.ID"
                    />
                </li>
            </ul>
        </template>
    </TwoColumnLayout>
</template>

<style scoped>
</style>