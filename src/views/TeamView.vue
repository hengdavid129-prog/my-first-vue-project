<script setup>
import team from "@/team.json";
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import TeamFooter from "@/components/Teams/TeamFooter.vue";
</script>

<template>
    <TeamHeader :team="team" />
    <!-- <header class="flex justify-between">
        <div>
            <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                    :disabled="team.members.length === team.spots">Add Member ({{ team.spots - team.members.length }} Spots Left)</button>
        </div>

        <div>
            <h3 class="inline-flex items-center text-3xl relative">
                <img src="/smiley.png" alt="" class="mr-2">
                {{ team.name }} Team
                <div class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">{{ team.spots }}</div>
            </h3>
        </div>
    </header> -->

    <div class="place-self-center flex flex-col gap-y-3" style="width: 725px;">
        <TeamMembers :team="team" />
        <!-- <table class="table-fixed border-spacing-2 border-separate">
            <thead>
                <th class="text-left px-6 py-2">Name</th>
                <th class="text-left px-6 py-2">Email</th>
                <th class="text-left px-6 py-2">Status</th>
            </thead>

            <tbody>
                <tr class="bg-gray-100 px-12">
                    <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
                        <img src="https://i.pravatar.cc/50?u=james@doe.com" alt="" class="rounded-xl">
                        James Doe
                    </td>

                    <td class="text-gray-500 px-6 py-4">james@doe.com</td>

                    <td class="px-6 py-4">
                        <button class="text-green-400 text-xl">Active</button>
                    </td>
                </tr>

                <tr class="bg-gray-600 px-12">
                    <td class="text-xl font-medium flex items-center gap-x-4 gx-6 py-4">
                        <img src="https://i.pravatar.cc/50?u=steven@doe.com" alt="" class="rounded-xl">
                        Sarah Doe
                    </td>

                    <td class="text-gray-500 px-6 py-4">sarah@doe.com</td>

                    <td class="px-6 py-4">
                        <button class="text-green-400 text-xl">Active</button>
                    </td>
                </tr>

                <tr class="bg-gray-100 px-12">
                    <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
                        <img src="https://i.pravatar.cc/50?u=steve@doe.com" alt="" class="rounded-xl">
                        Steven Doe
                    </td>

                    <td class="text-gray-500 px-6 py-4">steven@doe.com</td>

                    <td class="px-6 py-4">
                        <button class="text-green-400 text-xl">Active</button>
                    </td>
                </tr>

                <tr class="bg-gray-100 px-12">
                    <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
                        <img src="https://i.pravatar.css/50?u=jen@doe.com" alt="" class="rounded-xl">
                        Jen Doe
                    </td>

                    <td class="text-gray-500 px-6 py-4">jen@doe.com</td>

                    <td class="px-6 py-4">
                        <button class="text-green-400 text-xl">Active</button>
                    </td>
                </tr>

                <tr class="bg-gray-100 px-12">
                    <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
                        <img src="https://i.pravatar.cc/50?u=jen@doe.com" alt="" class="rounded-xl">
                        Joe Doe
                    </td>

                    <td class="text-gray-500 px-6 py-4">joe@doe.com</td>

                    <td class="px-6 py-4">
                        <button class="text-green-400 text-xl">Active</button>
                    </td>
                </tr>
            </tbody>
        </table> -->

    </div>

    <TeamFooter :team="team" />
    <!-- <footer class="mt-12 bg-gray-100 py-4 text-center">
        <h5 class="font-semibold text-lg">{{team.name}} - {{ team.spots }} Member Team</h5>
    </footer> -->
</template>